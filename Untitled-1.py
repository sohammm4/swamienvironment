def dfs(node):
    if not node:
        return 0
    
    print(node.val)

    dfs(node.left)
    dfs(node.right)

