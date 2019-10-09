# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```sql
SELECT p.productid, p.productName, c.categoryName 
FROM products as p
left join categories as c on p.categoryId = c.categoryId
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
```sql
SELECT o.orderId, s.shipperName 
FROM orders as o 
join shippers as s on o.shipperId = s.shipperId
where o.orderDate < '1997-01-09'
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
```sql
SELECT o.orderId, p.productName, o.quantity 
FROM [OrderDetails] as o
join products as p on o.productId = p.productId
where o.orderId = 10251
order by p.productName
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
```sql
SELECT o.orderId, 
c.customerName as [Customer Name], 
e.lastName as [Employee LastName] 
FROM Orders as o
join customers as c on o.customerId = c.customerId
join employees as e on o.employeeId = e.employeeId
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
```sql
SELECT *, c.categoryName, count(p.categoryId) as count FROM Categories as c
join products as p on c.categoryId = p.categoryId
group by p.categoryId
```

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
```sql
SELECT orderId, sum(quantity) as ItemCount 
FROM OrderDetails as o
group by o.orderId
```